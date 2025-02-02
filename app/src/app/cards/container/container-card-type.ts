import { CardType } from "src/app/schema/card-type";
import { CardContainerSelectComponent } from "./components/card-container-select/card-container-select.component";
import { CardContainerSettingsComponent } from "./components/card-container-settings/card-container-settings.component";
import { CardContainerComponent } from "./components/card-container/card-container.component";
import { ContainerCard } from "./schema/container-card";

export const ContainerCardType: CardType<ContainerCard> = {
  type: "container",

  component: CardContainerComponent,
  selectComponent: CardContainerSelectComponent,
  settingsComponent: CardContainerSettingsComponent,

  title: {
    "cs": "Tříděný odpad",
    "en": "Sorted Waste"
  },
};