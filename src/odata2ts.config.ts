import { ConfigFileOptions } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  services: {
    trippin: {
      sourceUrl: "https://services.odata.org/TripPinRESTierService",
      source: "resource/trippin.xml",
      output: "build/trippin",
    }
  }
}

export default config;