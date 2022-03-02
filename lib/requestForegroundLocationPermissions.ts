import * as ExpoLocation from "expo-location";

export async function requestForegroundLocationPermissions(): Promise<
  [ExpoLocation.LocationPermissionResponse | null, any]
> {
  try {
    console.log("requesting location permissions...");
    const res = await ExpoLocation.requestForegroundPermissionsAsync();
    if (res.status !== "granted") {
      throw new Error("Permission to access location was denied.");
    } else {
      console.log("permission granted.");
      return [res, null];
    }
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to request foreground location permissions.",
      error
    );
    return [null, error];
  }
}
