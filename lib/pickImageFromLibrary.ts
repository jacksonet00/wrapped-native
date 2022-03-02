import * as ImagePicker from "expo-image-picker";

export async function pickImageFromLibrary(): Promise<
  [{ result: ImagePicker.ImagePickerResult } | null, any]
> {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (result.cancelled) {
      throw new Error("The user closed the image libary.");
    }
    return [{ result }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to launch the image library.",
      error
    );
    return [null, error];
  }
}
