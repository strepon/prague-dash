import { Card } from "src/app/schema/card";

export class DepartureBoardCardDefinition {

  limit?: number;
  allPlatforms: boolean = true;
  showWheelchairAccessible?: boolean;
  timeDisplay: "time" | "remaining" = "remaining";
  addDelay?: boolean;
  platforms: { [id: string]: boolean; } = {};

  constructor(public name: string | null) { }
}

export type DepartureBoardCard = Card<DepartureBoardCardDefinition>;