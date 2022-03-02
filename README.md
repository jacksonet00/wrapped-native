# wrapped-native

a lightweight react-native library for common native mobile apis

### Installation

```bash
npm i wrapped-native
```

### Example

```ts
import { pickImageFromLibrary } from "wrapped-native";

async function selectImage() {
  const [res, err] = await pickImageFromLibrary();

  if (err) {
    // handle error
    return null;
  }

  if (res.cancelled) {
    // user closed the image picker
    return null;
  }

  return res.uri;
}
```
