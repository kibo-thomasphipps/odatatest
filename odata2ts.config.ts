import { ConfigFileOptions, EmitModes, Modes } from "@odata2ts/odata2ts";

const config: ConfigFileOptions = {
  mode: Modes.all,
  skipEditableModels: false,
  skipIdModels: false,
  skipOperations: false,
  services: {
    channeladvisor: {
      sourceUrl: "https://services.odata.org/TripPinRESTierService",
      source: "resource/channeladvisor.xml",
      output: "src/odata",
    }
  }
}

export default config;