import { ConfigFileOptions, EmitModes, Modes  } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  mode: Modes.qobjects,
  skipEditableModels: false,
  skipIdModels: false,
  skipOperations: false,
  services: {
    trippin: {
      sourceUrl: "https://services.odata.org/TripPinRESTierService",
      source: "resource/trippin.xml",
      output: "build/trippin",
    }
  }
}

export default config;