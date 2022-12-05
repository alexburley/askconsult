import _TRPC from "@common/trpc";
import configuration from "@frontend-config/ui-configuration";

const TRPCClient = _TRPC(configuration);
export default TRPCClient;
