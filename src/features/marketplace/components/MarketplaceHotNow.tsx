import { SUNNYSIDE } from "assets/sunnyside";
import { Label } from "components/ui/Label";
import { ButtonPanel, InnerPanel } from "components/ui/Panel";
import React from "react";
import { TrendingTrades } from "./TrendingTrades";
import { ITEM_DETAILS } from "features/game/types/images";
import { useNavigate } from "react-router-dom";
import { useAppTranslation } from "lib/i18n/useAppTranslations";
import sflIcon from "assets/icons/sfl.webp";
import tradeIcon from "assets/icons/trade.png";
import walletIcon from "assets/icons/wallet.png";
import { CONFIG } from "lib/config";

export const MarketplaceHotNow: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useAppTranslation();

  return (
    <>
      <InnerPanel className="mb-1">
        <div className="p-2">
          <Label type="default" className="mb-2 -ml-1">
            {t("marketplace.welcome")}
          </Label>
          <p className="text-sm mb-2">{t("marketplace.welcomeDescription")}</p>

          <div className="flex flex-wrap ">
            {CONFIG.NETWORK !== "mainnet" && (
              <div className="w-full sm:w-1/3 xl:w-1/4 pr-1">
                <ButtonPanel
                  className="w-full h-full"
                  onClick={() =>
                    navigate("/marketplace/collection?filters=resources")
                  }
                >
                  <div className="flex items-center">
                    <img
                      src={ITEM_DETAILS.Eggplant.image}
                      className="w-10 mr-2"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p>{t("marketplace.resources")}</p>
                        <img
                          src={SUNNYSIDE.icons.chevron_right}
                          className="h-4"
                        />
                      </div>
                      <p className="text-xs">
                        {t("marketplace.resourcesDescription")}
                      </p>
                    </div>
                  </div>
                </ButtonPanel>
              </div>
            )}

            <div className="w-full sm:w-1/3 xl:w-1/4 pr-1">
              <ButtonPanel
                className="w-full h-full"
                onClick={() =>
                  navigate(
                    "/marketplace/collection?filters=collectibles,wearables,utility",
                  )
                }
              >
                <div className="flex items-center">
                  <img
                    src={ITEM_DETAILS["Grinx's Hammer"].image}
                    className="w-10 mr-2"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p>{t("marketplace.powerUps")}</p>
                      <img
                        src={SUNNYSIDE.icons.chevron_right}
                        className="h-4"
                      />
                    </div>
                    <p className="text-xs">
                      {t("marketplace.powerUpsDescription")}
                    </p>
                  </div>
                </div>
              </ButtonPanel>
            </div>

            <div className="w-full sm:w-1/3 xl:w-1/4 pr-1">
              <ButtonPanel
                className=" w-full h-full"
                onClick={() =>
                  navigate(
                    "/marketplace/collection?filters=collectibles,wearables,cosmetic",
                  )
                }
              >
                <div className="flex items-center">
                  <img
                    src={ITEM_DETAILS["Abandoned Bear"].image}
                    className="w-10 mr-2"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <p>{t("marketplace.cosmetics")}</p>
                      <img
                        src={SUNNYSIDE.icons.chevron_right}
                        className="h-4"
                      />
                    </div>
                    <p className="text-xs">
                      {t("marketplace.cosmeticsDescription")}
                    </p>
                  </div>
                </div>
              </ButtonPanel>
            </div>
          </div>
        </div>
      </InnerPanel>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3 sm:pr-1  mb-1">
          <InnerPanel>
            <div className="flex items-center p-1">
              <img src={sflIcon} className="h-10 mr-2" />
              <div>
                <p>{`3,245,683 SFL`}</p>
                <p className="text-xs">{t("marketplace.totalVolume")}</p>
              </div>
            </div>
          </InnerPanel>
        </div>
        <div className="w-full sm:w-1/3 sm:pr-1  mb-1">
          <InnerPanel>
            <div className="flex items-center p-1">
              <img src={tradeIcon} className="h-10 mr-2" />
              <div>
                <p>{`178,144`}</p>
                <p className="text-xs">{t("marketplace.totalTrades")}</p>
              </div>
            </div>
          </InnerPanel>
        </div>
        <div className="w-full sm:w-1/3  mb-1">
          <InnerPanel>
            <div className="flex items-center sm:p-1">
              <img src={walletIcon} className="h-10 mr-2" />
              <div>
                <p>{`234,506`}</p>
                <p className="text-xs">
                  {t("marketplace.walletsHoldingCollectibles")}
                </p>
              </div>
            </div>
          </InnerPanel>
        </div>
      </div>
      <InnerPanel>
        <div className="p-2">
          <Label type="success" className="-ml-1 mb-2">
            {t("marketplace.trending")}
          </Label>

          <TrendingTrades />
        </div>
      </InnerPanel>
    </>
  );
};
