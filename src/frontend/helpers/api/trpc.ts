import _TRPC from "@common/trpc";
import configuration from "@frontend-config/ui-configuration";

const API = _TRPC(configuration);
export default API;
