import * as ExpoLocation from "expo-location";

export async function getCurrentLocation(): Promise<
  [{ location: ExpoLocation.LocationObject } | null, any]
> {
  try {
    const location = await ExpoLocation.getCurrentPositionAsync({});
    return [{ location }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred when requesting current location.",
      error
    );
    return [null, error];
  }
}
