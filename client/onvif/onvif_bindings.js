import * as libonvif from "./libonvif";

export const DeviceBinding =
{
    GetServices( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetServices", input, null, "tds", "GetServicesResponse", output, null);
    },
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetServiceCapabilities", input, null, "tds", "GetServiceCapabilitiesResponse", output, null);
    },
    GetDeviceInformation( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDeviceInformation", input, null, "tds", "GetDeviceInformationResponse", output, null);
    },
    SetSystemDateAndTime( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetSystemDateAndTime", input, null, "tds", "SetSystemDateAndTimeResponse", output, null);
    },
    GetSystemDateAndTime( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetSystemDateAndTime", input, null, "tds", "GetSystemDateAndTimeResponse", output, null);
    },
    SetSystemFactoryDefault( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetSystemFactoryDefault", input, null, "tds", "SetSystemFactoryDefaultResponse", output, null);
    },
    UpgradeSystemFirmware( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "UpgradeSystemFirmware", input, null, "tds", "UpgradeSystemFirmwareResponse", output, null);
    },
    SystemReboot( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SystemReboot", input, null, "tds", "SystemRebootResponse", output, null);
    },
    RestoreSystem( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "RestoreSystem", input, null, "tds", "RestoreSystemResponse", output, null);
    },
    GetSystemBackup( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetSystemBackup", input, null, "tds", "GetSystemBackupResponse", output, null);
    },
    GetSystemLog( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetSystemLog", input, null, "tds", "GetSystemLogResponse", output, null);
    },
    GetSystemSupportInformation( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetSystemSupportInformation", input, null, "tds", "GetSystemSupportInformationResponse", output, null);
    },
    GetScopes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetScopes", input, null, "tds", "GetScopesResponse", output, null);
    },
    SetScopes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetScopes", input, null, "tds", "SetScopesResponse", output, null);
    },
    AddScopes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "AddScopes", input, null, "tds", "AddScopesResponse", output, null);
    },
    RemoveScopes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "RemoveScopes", input, null, "tds", "RemoveScopesResponse", output, null);
    },
    GetDiscoveryMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDiscoveryMode", input, null, "tds", "GetDiscoveryModeResponse", output, null);
    },
    SetDiscoveryMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetDiscoveryMode", input, null, "tds", "SetDiscoveryModeResponse", output, null);
    },
    GetRemoteDiscoveryMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetRemoteDiscoveryMode", input, null, "tds", "GetRemoteDiscoveryModeResponse", output, null);
    },
    SetRemoteDiscoveryMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetRemoteDiscoveryMode", input, null, "tds", "SetRemoteDiscoveryModeResponse", output, null);
    },
    GetDPAddresses( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDPAddresses", input, null, "tds", "GetDPAddressesResponse", output, null);
    },
    GetEndpointReference( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetEndpointReference", input, null, "tds", "GetEndpointReferenceResponse", output, null);
    },
    GetRemoteUser( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetRemoteUser", input, null, "tds", "GetRemoteUserResponse", output, null);
    },
    SetRemoteUser( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetRemoteUser", input, null, "tds", "SetRemoteUserResponse", output, null);
    },
    GetUsers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetUsers", input, null, "tds", "GetUsersResponse", output, null);
    },
    CreateUsers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "CreateUsers", input, null, "tds", "CreateUsersResponse", output, null);
    },
    DeleteUsers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "DeleteUsers", input, null, "tds", "DeleteUsersResponse", output, null);
    },
    SetUser( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetUser", input, null, "tds", "SetUserResponse", output, null);
    },
    GetWsdlUrl( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetWsdlUrl", input, null, "tds", "GetWsdlUrlResponse", output, null);
    },
    GetCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetCapabilities", input, null, "tds", "GetCapabilitiesResponse", output, null);
    },
    SetDPAddresses( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetDPAddresses", input, null, "tds", "SetDPAddressesResponse", output, null);
    },
    GetHostname( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetHostname", input, null, "tds", "GetHostnameResponse", output, null);
    },
    SetHostname( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetHostname", input, null, "tds", "SetHostnameResponse", output, null);
    },
    SetHostnameFromDHCP( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetHostnameFromDHCP", input, null, "tds", "SetHostnameFromDHCPResponse", output, null);
    },
    GetDNS( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDNS", input, null, "tds", "GetDNSResponse", output, null);
    },
    SetDNS( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetDNS", input, null, "tds", "SetDNSResponse", output, null);
    },
    GetNTP( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetNTP", input, null, "tds", "GetNTPResponse", output, null);
    },
    SetNTP( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetNTP", input, null, "tds", "SetNTPResponse", output, null);
    },
    GetDynamicDNS( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDynamicDNS", input, null, "tds", "GetDynamicDNSResponse", output, null);
    },
    SetDynamicDNS( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetDynamicDNS", input, null, "tds", "SetDynamicDNSResponse", output, null);
    },
    GetNetworkInterfaces( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetNetworkInterfaces", input, null, "tds", "GetNetworkInterfacesResponse", output, null);
    },
    SetNetworkInterfaces( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetNetworkInterfaces", input, null, "tds", "SetNetworkInterfacesResponse", output, null);
    },
    GetNetworkProtocols( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetNetworkProtocols", input, null, "tds", "GetNetworkProtocolsResponse", output, null);
    },
    SetNetworkProtocols( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetNetworkProtocols", input, null, "tds", "SetNetworkProtocolsResponse", output, null);
    },
    GetNetworkDefaultGateway( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetNetworkDefaultGateway", input, null, "tds", "GetNetworkDefaultGatewayResponse", output, null);
    },
    SetNetworkDefaultGateway( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetNetworkDefaultGateway", input, null, "tds", "SetNetworkDefaultGatewayResponse", output, null);
    },
    GetZeroConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetZeroConfiguration", input, null, "tds", "GetZeroConfigurationResponse", output, null);
    },
    SetZeroConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetZeroConfiguration", input, null, "tds", "SetZeroConfigurationResponse", output, null);
    },
    GetIPAddressFilter( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetIPAddressFilter", input, null, "tds", "GetIPAddressFilterResponse", output, null);
    },
    SetIPAddressFilter( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetIPAddressFilter", input, null, "tds", "SetIPAddressFilterResponse", output, null);
    },
    AddIPAddressFilter( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "AddIPAddressFilter", input, null, "tds", "AddIPAddressFilterResponse", output, null);
    },
    RemoveIPAddressFilter( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "RemoveIPAddressFilter", input, null, "tds", "RemoveIPAddressFilterResponse", output, null);
    },
    GetAccessPolicy( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetAccessPolicy", input, null, "tds", "GetAccessPolicyResponse", output, null);
    },
    SetAccessPolicy( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetAccessPolicy", input, null, "tds", "SetAccessPolicyResponse", output, null);
    },
    CreateCertificate( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "CreateCertificate", input, null, "tds", "CreateCertificateResponse", output, null);
    },
    GetCertificates( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetCertificates", input, null, "tds", "GetCertificatesResponse", output, null);
    },
    GetCertificatesStatus( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetCertificatesStatus", input, null, "tds", "GetCertificatesStatusResponse", output, null);
    },
    SetCertificatesStatus( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetCertificatesStatus", input, null, "tds", "SetCertificatesStatusResponse", output, null);
    },
    DeleteCertificates( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "DeleteCertificates", input, null, "tds", "DeleteCertificatesResponse", output, null);
    },
    GetPkcs10Request( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetPkcs10Request", input, null, "tds", "GetPkcs10RequestResponse", output, null);
    },
    LoadCertificates( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "LoadCertificates", input, null, "tds", "LoadCertificatesResponse", output, null);
    },
    GetClientCertificateMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetClientCertificateMode", input, null, "tds", "GetClientCertificateModeResponse", output, null);
    },
    SetClientCertificateMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetClientCertificateMode", input, null, "tds", "SetClientCertificateModeResponse", output, null);
    },
    GetRelayOutputs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetRelayOutputs", input, null, "tds", "GetRelayOutputsResponse", output, null);
    },
    SetRelayOutputSettings( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetRelayOutputSettings", input, null, "tds", "SetRelayOutputSettingsResponse", output, null);
    },
    SetRelayOutputState( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetRelayOutputState", input, null, "tds", "SetRelayOutputStateResponse", output, null);
    },
    SendAuxiliaryCommand( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SendAuxiliaryCommand", input, null, "tds", "SendAuxiliaryCommandResponse", output, null);
    },
    GetCACertificates( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetCACertificates", input, null, "tds", "GetCACertificatesResponse", output, null);
    },
    LoadCertificateWithPrivateKey( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "LoadCertificateWithPrivateKey", input, null, "tds", "LoadCertificateWithPrivateKeyResponse", output, null);
    },
    GetCertificateInformation( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetCertificateInformation", input, null, "tds", "GetCertificateInformationResponse", output, null);
    },
    LoadCACertificates( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "LoadCACertificates", input, null, "tds", "LoadCACertificatesResponse", output, null);
    },
    CreateDot1XConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "CreateDot1XConfiguration", input, null, "tds", "CreateDot1XConfigurationResponse", output, null);
    },
    SetDot1XConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetDot1XConfiguration", input, null, "tds", "SetDot1XConfigurationResponse", output, null);
    },
    GetDot1XConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDot1XConfiguration", input, null, "tds", "GetDot1XConfigurationResponse", output, null);
    },
    GetDot1XConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDot1XConfigurations", input, null, "tds", "GetDot1XConfigurationsResponse", output, null);
    },
    DeleteDot1XConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "DeleteDot1XConfiguration", input, null, "tds", "DeleteDot1XConfigurationResponse", output, null);
    },
    GetDot11Capabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDot11Capabilities", input, null, "tds", "GetDot11CapabilitiesResponse", output, null);
    },
    GetDot11Status( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetDot11Status", input, null, "tds", "GetDot11StatusResponse", output, null);
    },
    ScanAvailableDot11Networks( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "ScanAvailableDot11Networks", input, null, "tds", "ScanAvailableDot11NetworksResponse", output, null);
    },
    GetSystemUris( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetSystemUris", input, null, "tds", "GetSystemUrisResponse", output, null);
    },
    StartFirmwareUpgrade( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "StartFirmwareUpgrade", input, null, "tds", "StartFirmwareUpgradeResponse", output, null);
    },
    StartSystemRestore( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "StartSystemRestore", input, null, "tds", "StartSystemRestoreResponse", output, null);
    },
    GetStorageConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetStorageConfigurations", input, null, "tds", "GetStorageConfigurationsResponse", output, null);
    },
    CreateStorageConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "CreateStorageConfiguration", input, null, "tds", "CreateStorageConfigurationResponse", output, null);
    },
    GetStorageConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "GetStorageConfiguration", input, null, "tds", "GetStorageConfigurationResponse", output, null);
    },
    SetStorageConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "SetStorageConfiguration", input, null, "tds", "SetStorageConfigurationResponse", output, null);
    },
    DeleteStorageConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tds", "DeleteStorageConfiguration", input, null, "tds", "DeleteStorageConfigurationResponse", output, null);
    },
};
export const PullPointSubscriptionBinding =
{
    PullMessages( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tev", "PullMessages", input, "http://www.onvif.org/ver10/events/wsdl/PullPointSubscription/PullMessagesRequest", "tev", "PullMessagesResponse", output, "http://www.onvif.org/ver10/events/wsdl/PullPointSubscription/PullMessagesResponse");
    },
    Seek( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tev", "Seek", input, "http://www.onvif.org/ver10/events/wsdl/PullPointSubscription/SeekRequest", "tev", "SeekResponse", output, "http://www.onvif.org/ver10/events/wsdl/PullPointSubscription/SeekResponse");
    },
    SetSynchronizationPoint( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tev", "SetSynchronizationPoint", input, "http://www.onvif.org/ver10/events/wsdl/PullPointSubscription/SetSynchronizationPointRequest", "tev", "SetSynchronizationPointResponse", output, "http://www.onvif.org/ver10/events/wsdl/PullPointSubscription/SetSynchronizationPointResponse");
    },
};
export const EventBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tev", "GetServiceCapabilities", input, "http://www.onvif.org/ver10/events/wsdl/EventPortType/GetServiceCapabilitiesRequest", "tev", "GetServiceCapabilitiesResponse", output, "http://www.onvif.org/ver10/events/wsdl/EventPortType/GetServiceCapabilitiesResponse");
    },
    CreatePullPointSubscription( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tev", "CreatePullPointSubscription", input, "http://www.onvif.org/ver10/events/wsdl/EventPortType/CreatePullPointSubscriptionRequest", "tev", "CreatePullPointSubscriptionResponse", output, "http://www.onvif.org/ver10/events/wsdl/EventPortType/CreatePullPointSubscriptionResponse");
    },
    GetEventProperties( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tev", "GetEventProperties", input, "http://www.onvif.org/ver10/events/wsdl/EventPortType/GetEventPropertiesRequest", "tev", "GetEventPropertiesResponse", output, "http://www.onvif.org/ver10/events/wsdl/EventPortType/GetEventPropertiesResponse");
    },
};
export const SubscriptionManagerBinding =
{
    Renew( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "Renew", input, null, "wsnt", "RenewResponse", output, null);
    },
    Unsubscribe( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "Unsubscribe", input, null, "wsnt", "UnsubscribeResponse", output, null);
    },
};
export const NotificationProducerBinding =
{
    Subscribe( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "Subscribe", input, null, "wsnt", "SubscribeResponse", output, null);
    },
    GetCurrentMessage( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "GetCurrentMessage", input, null, "wsnt", "GetCurrentMessageResponse", output, null);
    },
};
export const NotificationConsumerBinding =
{
    Notify( obj, input )
    {
        return libonvif.onvif_one_way_operation(obj, "wsnt", "Notify", input, null);
    },
};
export const PullPointBinding =
{
    GetMessages( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "GetMessages", input, null, "wsnt", "GetMessagesResponse", output, null);
    },
    DestroyPullPoint( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "DestroyPullPoint", input, null, "wsnt", "DestroyPullPointResponse", output, null);
    },
    Notify( obj, input )
    {
        return libonvif.onvif_one_way_operation(obj, "wsnt", "Notify", input, null);
    },
};
export const CreatePullPointBinding =
{
    CreatePullPoint( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "CreatePullPoint", input, null, "wsnt", "CreatePullPointResponse", output, null);
    },
};
export const PausableSubscriptionManagerBinding =
{
    Renew( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "Renew", input, null, "wsnt", "RenewResponse", output, null);
    },
    Unsubscribe( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "Unsubscribe", input, null, "wsnt", "UnsubscribeResponse", output, null);
    },
    PauseSubscription( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "PauseSubscription", input, null, "wsnt", "PauseSubscriptionResponse", output, null);
    },
    ResumeSubscription( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "wsnt", "ResumeSubscription", input, null, "wsnt", "ResumeSubscriptionResponse", output, null);
    },
};
export const ImagingBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "GetServiceCapabilities", input, null, "timg", "GetServiceCapabilitiesResponse", output, null);
    },
    GetImagingSettings( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "GetImagingSettings", input, null, "timg", "GetImagingSettingsResponse", output, null);
    },
    SetImagingSettings( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "SetImagingSettings", input, null, "timg", "SetImagingSettingsResponse", output, null);
    },
    GetOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "GetOptions", input, null, "timg", "GetOptionsResponse", output, null);
    },
    Move( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "Move", input, null, "timg", "MoveResponse", output, null);
    },
    Stop( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "Stop", input, null, "timg", "StopResponse", output, null);
    },
    GetStatus( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "GetStatus", input, null, "timg", "GetStatusResponse", output, null);
    },
    GetMoveOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "timg", "GetMoveOptions", input, null, "timg", "GetMoveOptionsResponse", output, null);
    },
};
export const MediaBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetServiceCapabilities", input, null, "trt", "GetServiceCapabilitiesResponse", output, null);
    },
    GetVideoSources( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoSources", input, null, "trt", "GetVideoSourcesResponse", output, null);
    },
    GetAudioSources( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioSources", input, null, "trt", "GetAudioSourcesResponse", output, null);
    },
    GetAudioOutputs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioOutputs", input, null, "trt", "GetAudioOutputsResponse", output, null);
    },
    CreateProfile( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "CreateProfile", input, null, "trt", "CreateProfileResponse", output, null);
    },
    GetProfile( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetProfile", input, null, "trt", "GetProfileResponse", output, null);
    },
    GetProfiles( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetProfiles", input, null, "trt", "GetProfilesResponse", output, null);
    },
    AddVideoEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddVideoEncoderConfiguration", input, null, "trt", "AddVideoEncoderConfigurationResponse", output, null);
    },
    AddVideoSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddVideoSourceConfiguration", input, null, "trt", "AddVideoSourceConfigurationResponse", output, null);
    },
    AddAudioEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddAudioEncoderConfiguration", input, null, "trt", "AddAudioEncoderConfigurationResponse", output, null);
    },
    AddAudioSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddAudioSourceConfiguration", input, null, "trt", "AddAudioSourceConfigurationResponse", output, null);
    },
    AddPTZConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddPTZConfiguration", input, null, "trt", "AddPTZConfigurationResponse", output, null);
    },
    AddVideoAnalyticsConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddVideoAnalyticsConfiguration", input, null, "trt", "AddVideoAnalyticsConfigurationResponse", output, null);
    },
    AddMetadataConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddMetadataConfiguration", input, null, "trt", "AddMetadataConfigurationResponse", output, null);
    },
    AddAudioOutputConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddAudioOutputConfiguration", input, null, "trt", "AddAudioOutputConfigurationResponse", output, null);
    },
    AddAudioDecoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "AddAudioDecoderConfiguration", input, null, "trt", "AddAudioDecoderConfigurationResponse", output, null);
    },
    RemoveVideoEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveVideoEncoderConfiguration", input, null, "trt", "RemoveVideoEncoderConfigurationResponse", output, null);
    },
    RemoveVideoSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveVideoSourceConfiguration", input, null, "trt", "RemoveVideoSourceConfigurationResponse", output, null);
    },
    RemoveAudioEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveAudioEncoderConfiguration", input, null, "trt", "RemoveAudioEncoderConfigurationResponse", output, null);
    },
    RemoveAudioSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveAudioSourceConfiguration", input, null, "trt", "RemoveAudioSourceConfigurationResponse", output, null);
    },
    RemovePTZConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemovePTZConfiguration", input, null, "trt", "RemovePTZConfigurationResponse", output, null);
    },
    RemoveVideoAnalyticsConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveVideoAnalyticsConfiguration", input, null, "trt", "RemoveVideoAnalyticsConfigurationResponse", output, null);
    },
    RemoveMetadataConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveMetadataConfiguration", input, null, "trt", "RemoveMetadataConfigurationResponse", output, null);
    },
    RemoveAudioOutputConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveAudioOutputConfiguration", input, null, "trt", "RemoveAudioOutputConfigurationResponse", output, null);
    },
    RemoveAudioDecoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "RemoveAudioDecoderConfiguration", input, null, "trt", "RemoveAudioDecoderConfigurationResponse", output, null);
    },
    DeleteProfile( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "DeleteProfile", input, null, "trt", "DeleteProfileResponse", output, null);
    },
    GetVideoSourceConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoSourceConfigurations", input, null, "trt", "GetVideoSourceConfigurationsResponse", output, null);
    },
    GetVideoEncoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoEncoderConfigurations", input, null, "trt", "GetVideoEncoderConfigurationsResponse", output, null);
    },
    GetAudioSourceConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioSourceConfigurations", input, null, "trt", "GetAudioSourceConfigurationsResponse", output, null);
    },
    GetAudioEncoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioEncoderConfigurations", input, null, "trt", "GetAudioEncoderConfigurationsResponse", output, null);
    },
    GetVideoAnalyticsConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoAnalyticsConfigurations", input, null, "trt", "GetVideoAnalyticsConfigurationsResponse", output, null);
    },
    GetMetadataConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetMetadataConfigurations", input, null, "trt", "GetMetadataConfigurationsResponse", output, null);
    },
    GetAudioOutputConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioOutputConfigurations", input, null, "trt", "GetAudioOutputConfigurationsResponse", output, null);
    },
    GetAudioDecoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioDecoderConfigurations", input, null, "trt", "GetAudioDecoderConfigurationsResponse", output, null);
    },
    GetVideoSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoSourceConfiguration", input, null, "trt", "GetVideoSourceConfigurationResponse", output, null);
    },
    GetVideoEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoEncoderConfiguration", input, null, "trt", "GetVideoEncoderConfigurationResponse", output, null);
    },
    GetAudioSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioSourceConfiguration", input, null, "trt", "GetAudioSourceConfigurationResponse", output, null);
    },
    GetAudioEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioEncoderConfiguration", input, null, "trt", "GetAudioEncoderConfigurationResponse", output, null);
    },
    GetVideoAnalyticsConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoAnalyticsConfiguration", input, null, "trt", "GetVideoAnalyticsConfigurationResponse", output, null);
    },
    GetMetadataConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetMetadataConfiguration", input, null, "trt", "GetMetadataConfigurationResponse", output, null);
    },
    GetAudioOutputConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioOutputConfiguration", input, null, "trt", "GetAudioOutputConfigurationResponse", output, null);
    },
    GetAudioDecoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioDecoderConfiguration", input, null, "trt", "GetAudioDecoderConfigurationResponse", output, null);
    },
    GetCompatibleVideoEncoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleVideoEncoderConfigurations", input, null, "trt", "GetCompatibleVideoEncoderConfigurationsResponse", output, null);
    },
    GetCompatibleVideoSourceConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleVideoSourceConfigurations", input, null, "trt", "GetCompatibleVideoSourceConfigurationsResponse", output, null);
    },
    GetCompatibleAudioEncoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleAudioEncoderConfigurations", input, null, "trt", "GetCompatibleAudioEncoderConfigurationsResponse", output, null);
    },
    GetCompatibleAudioSourceConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleAudioSourceConfigurations", input, null, "trt", "GetCompatibleAudioSourceConfigurationsResponse", output, null);
    },
    GetCompatibleVideoAnalyticsConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleVideoAnalyticsConfigurations", input, null, "trt", "GetCompatibleVideoAnalyticsConfigurationsResponse", output, null);
    },
    GetCompatibleMetadataConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleMetadataConfigurations", input, null, "trt", "GetCompatibleMetadataConfigurationsResponse", output, null);
    },
    GetCompatibleAudioOutputConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleAudioOutputConfigurations", input, null, "trt", "GetCompatibleAudioOutputConfigurationsResponse", output, null);
    },
    GetCompatibleAudioDecoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetCompatibleAudioDecoderConfigurations", input, null, "trt", "GetCompatibleAudioDecoderConfigurationsResponse", output, null);
    },
    SetVideoSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetVideoSourceConfiguration", input, null, "trt", "SetVideoSourceConfigurationResponse", output, null);
    },
    SetVideoEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetVideoEncoderConfiguration", input, null, "trt", "SetVideoEncoderConfigurationResponse", output, null);
    },
    SetAudioSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetAudioSourceConfiguration", input, null, "trt", "SetAudioSourceConfigurationResponse", output, null);
    },
    SetAudioEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetAudioEncoderConfiguration", input, null, "trt", "SetAudioEncoderConfigurationResponse", output, null);
    },
    SetVideoAnalyticsConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetVideoAnalyticsConfiguration", input, null, "trt", "SetVideoAnalyticsConfigurationResponse", output, null);
    },
    SetMetadataConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetMetadataConfiguration", input, null, "trt", "SetMetadataConfigurationResponse", output, null);
    },
    SetAudioOutputConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetAudioOutputConfiguration", input, null, "trt", "SetAudioOutputConfigurationResponse", output, null);
    },
    SetAudioDecoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetAudioDecoderConfiguration", input, null, "trt", "SetAudioDecoderConfigurationResponse", output, null);
    },
    GetVideoSourceConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoSourceConfigurationOptions", input, null, "trt", "GetVideoSourceConfigurationOptionsResponse", output, null);
    },
    GetVideoEncoderConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoEncoderConfigurationOptions", input, null, "trt", "GetVideoEncoderConfigurationOptionsResponse", output, null);
    },
    GetAudioSourceConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioSourceConfigurationOptions", input, null, "trt", "GetAudioSourceConfigurationOptionsResponse", output, null);
    },
    GetAudioEncoderConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioEncoderConfigurationOptions", input, null, "trt", "GetAudioEncoderConfigurationOptionsResponse", output, null);
    },
    GetMetadataConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetMetadataConfigurationOptions", input, null, "trt", "GetMetadataConfigurationOptionsResponse", output, null);
    },
    GetAudioOutputConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioOutputConfigurationOptions", input, null, "trt", "GetAudioOutputConfigurationOptionsResponse", output, null);
    },
    GetAudioDecoderConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetAudioDecoderConfigurationOptions", input, null, "trt", "GetAudioDecoderConfigurationOptionsResponse", output, null);
    },
    GetGuaranteedNumberOfVideoEncoderInstances( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetGuaranteedNumberOfVideoEncoderInstances", input, null, "trt", "GetGuaranteedNumberOfVideoEncoderInstancesResponse", output, null);
    },
    GetStreamUri( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetStreamUri", input, null, "trt", "GetStreamUriResponse", output, null);
    },
    StartMulticastStreaming( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "StartMulticastStreaming", input, null, "trt", "StartMulticastStreamingResponse", output, null);
    },
    StopMulticastStreaming( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "StopMulticastStreaming", input, null, "trt", "StopMulticastStreamingResponse", output, null);
    },
    SetSynchronizationPoint( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetSynchronizationPoint", input, null, "trt", "SetSynchronizationPointResponse", output, null);
    },
    GetSnapshotUri( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetSnapshotUri", input, null, "trt", "GetSnapshotUriResponse", output, null);
    },
    GetVideoSourceModes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetVideoSourceModes", input, null, "trt", "GetVideoSourceModesResponse", output, null);
    },
    SetVideoSourceMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetVideoSourceMode", input, null, "trt", "SetVideoSourceModeResponse", output, null);
    },
    GetOSDs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetOSDs", input, null, "trt", "GetOSDsResponse", output, null);
    },
    GetOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetOSD", input, null, "trt", "GetOSDResponse", output, null);
    },
    GetOSDOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "GetOSDOptions", input, null, "trt", "GetOSDOptionsResponse", output, null);
    },
    SetOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "SetOSD", input, null, "trt", "SetOSDResponse", output, null);
    },
    CreateOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "CreateOSD", input, null, "trt", "CreateOSDResponse", output, null);
    },
    DeleteOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "trt", "DeleteOSD", input, null, "trt", "DeleteOSDResponse", output, null);
    },
};
export const Media2Binding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetServiceCapabilities", input, null, "tr2", "GetServiceCapabilitiesResponse2", output, null);
    },
    CreateProfile( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "CreateProfile", input, null, "tr2", "CreateProfileResponse", output, null);
    },
    GetProfiles( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetProfiles", input, null, "tr2", "GetProfilesResponse", output, null);
    },
    AddConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "AddConfiguration", input, null, "tr2", "AddConfigurationResponse", output, null);
    },
    RemoveConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "RemoveConfiguration", input, null, "tr2", "RemoveConfigurationResponse", output, null);
    },
    DeleteProfile( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "DeleteProfile", input, null, "tr2", "DeleteProfileResponse", output, null);
    },
    GetVideoSourceConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetVideoSourceConfigurations", input, null, "tr2", "GetVideoSourceConfigurationsResponse", output, null);
    },
    GetVideoEncoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetVideoEncoderConfigurations", input, null, "tr2", "GetVideoEncoderConfigurationsResponse", output, null);
    },
    GetAudioSourceConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioSourceConfigurations", input, null, "tr2", "GetAudioSourceConfigurationsResponse", output, null);
    },
    GetAudioEncoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioEncoderConfigurations", input, null, "tr2", "GetAudioEncoderConfigurationsResponse", output, null);
    },
    GetAnalyticsConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAnalyticsConfigurations", input, null, "tr2", "GetAnalyticsConfigurationsResponse", output, null);
    },
    GetMetadataConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetMetadataConfigurations", input, null, "tr2", "GetMetadataConfigurationsResponse", output, null);
    },
    GetAudioOutputConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioOutputConfigurations", input, null, "tr2", "GetAudioOutputConfigurationsResponse", output, null);
    },
    GetAudioDecoderConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioDecoderConfigurations", input, null, "tr2", "GetAudioDecoderConfigurationsResponse", output, null);
    },
    SetVideoSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetVideoSourceConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    SetVideoEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetVideoEncoderConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    SetAudioSourceConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetAudioSourceConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    SetAudioEncoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetAudioEncoderConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    SetMetadataConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetMetadataConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    SetAudioOutputConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetAudioOutputConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    SetAudioDecoderConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetAudioDecoderConfiguration", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    GetVideoSourceConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetVideoSourceConfigurationOptions", input, null, "tr2", "GetVideoSourceConfigurationOptionsResponse", output, null);
    },
    GetVideoEncoderConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetVideoEncoderConfigurationOptions", input, null, "tr2", "GetVideoEncoderConfigurationOptionsResponse", output, null);
    },
    GetAudioSourceConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioSourceConfigurationOptions", input, null, "tr2", "GetAudioSourceConfigurationOptionsResponse", output, null);
    },
    GetAudioEncoderConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioEncoderConfigurationOptions", input, null, "tr2", "GetAudioEncoderConfigurationOptionsResponse", output, null);
    },
    GetMetadataConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetMetadataConfigurationOptions", input, null, "tr2", "GetMetadataConfigurationOptionsResponse", output, null);
    },
    GetAudioOutputConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioOutputConfigurationOptions", input, null, "tr2", "GetAudioOutputConfigurationOptionsResponse", output, null);
    },
    GetAudioDecoderConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetAudioDecoderConfigurationOptions", input, null, "tr2", "GetAudioDecoderConfigurationOptionsResponse", output, null);
    },
    GetVideoEncoderInstances( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetVideoEncoderInstances", input, null, "tr2", "GetVideoEncoderInstancesResponse", output, null);
    },
    GetStreamUri( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetStreamUri", input, null, "tr2", "GetStreamUriResponse", output, null);
    },
    StartMulticastStreaming( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "StartMulticastStreaming", input, null, "tr2", "StartStopMulticastStreamingResponse", output, null);
    },
    StopMulticastStreaming( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "StopMulticastStreaming", input, null, "tr2", "StartStopMulticastStreamingResponse", output, null);
    },
    SetSynchronizationPoint( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetSynchronizationPoint", input, null, "tr2", "SetSynchronizationPointResponse", output, null);
    },
    GetSnapshotUri( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetSnapshotUri", input, null, "tr2", "GetSnapshotUriResponse", output, null);
    },
    GetVideoSourceModes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetVideoSourceModes", input, null, "tr2", "GetVideoSourceModesResponse", output, null);
    },
    SetVideoSourceMode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetVideoSourceMode", input, null, "tr2", "SetVideoSourceModeResponse", output, null);
    },
    GetOSDs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetOSDs", input, null, "tr2", "GetOSDsResponse", output, null);
    },
    GetOSDOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "GetOSDOptions", input, null, "tr2", "GetOSDOptionsResponse", output, null);
    },
    SetOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "SetOSD", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
    CreateOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "CreateOSD", input, null, "tr2", "CreateOSDResponse", output, null);
    },
    DeleteOSD( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tr2", "DeleteOSD", input, null, "tr2", "SetConfigurationResponse", output, null);
    },
};
export const PTZBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetServiceCapabilities", input, null, "tptz", "GetServiceCapabilitiesResponse", output, null);
    },
    GetConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetConfigurations", input, null, "tptz", "GetConfigurationsResponse", output, null);
    },
    GetPresets( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetPresets", input, null, "tptz", "GetPresetsResponse", output, null);
    },
    SetPreset( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "SetPreset", input, null, "tptz", "SetPresetResponse", output, null);
    },
    RemovePreset( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "RemovePreset", input, null, "tptz", "RemovePresetResponse", output, null);
    },
    GotoPreset( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GotoPreset", input, null, "tptz", "GotoPresetResponse", output, null);
    },
    GetStatus( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetStatus", input, null, "tptz", "GetStatusResponse", output, null);
    },
    GetConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetConfiguration", input, null, "tptz", "GetConfigurationResponse", output, null);
    },
    GetNodes( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetNodes", input, null, "tptz", "GetNodesResponse", output, null);
    },
    GetNode( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetNode", input, null, "tptz", "GetNodeResponse", output, null);
    },
    SetConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "SetConfiguration", input, null, "tptz", "SetConfigurationResponse", output, null);
    },
    GetConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetConfigurationOptions", input, null, "tptz", "GetConfigurationOptionsResponse", output, null);
    },
    GotoHomePosition( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GotoHomePosition", input, null, "tptz", "GotoHomePositionResponse", output, null);
    },
    SetHomePosition( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "SetHomePosition", input, null, "tptz", "SetHomePositionResponse", output, null);
    },
    ContinuousMove( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "ContinuousMove", input, null, "tptz", "ContinuousMoveResponse", output, null);
    },
    RelativeMove( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "RelativeMove", input, null, "tptz", "RelativeMoveResponse", output, null);
    },
    SendAuxiliaryCommand( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "SendAuxiliaryCommand", input, null, "tptz", "SendAuxiliaryCommandResponse", output, null);
    },
    AbsoluteMove( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "AbsoluteMove", input, null, "tptz", "AbsoluteMoveResponse", output, null);
    },
    Stop( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "Stop", input, null, "tptz", "StopResponse", output, null);
    },
    GetPresetTours( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetPresetTours", input, null, "tptz", "GetPresetToursResponse", output, null);
    },
    GetPresetTour( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetPresetTour", input, null, "tptz", "GetPresetTourResponse", output, null);
    },
    GetPresetTourOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetPresetTourOptions", input, null, "tptz", "GetPresetTourOptionsResponse", output, null);
    },
    CreatePresetTour( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "CreatePresetTour", input, null, "tptz", "CreatePresetTourResponse", output, null);
    },
    ModifyPresetTour( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "ModifyPresetTour", input, null, "tptz", "ModifyPresetTourResponse", output, null);
    },
    OperatePresetTour( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "OperatePresetTour", input, null, "tptz", "OperatePresetTourResponse", output, null);
    },
    RemovePresetTour( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "RemovePresetTour", input, null, "tptz", "RemovePresetTourResponse", output, null);
    },
    GetCompatibleConfigurations( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tptz", "GetCompatibleConfigurations", input, null, "tptz", "GetCompatibleConfigurationsResponse", output, null);
    },
};
export const ThermalBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tth", "GetServiceCapabilities", input, null, "tth", "GetServiceCapabilitiesResponse", output, null);
    },
    GetConfigurationOptions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tth", "GetConfigurationOptions", input, null, "tth", "GetConfigurationOptionsResponse", output, null);
    },
    GetConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tth", "GetConfiguration", input, null, "tth", "GetConfigurationResponse", output, null);
    },
    SetConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tth", "SetConfiguration", input, null, "tth", "SetConfigurationResponse", output, null);
    },
};
export const RuleEngineBinding =
{
    GetSupportedRules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "GetSupportedRules", input, null, "tan", "GetSupportedRulesResponse", output, null);
    },
    CreateRules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "CreateRules", input, null, "tan", "CreateRulesResponse", output, null);
    },
    DeleteRules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "DeleteRules", input, null, "tan", "DeleteRulesResponse", output, null);
    },
    GetRules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "GetRules", input, null, "tan", "GetRulesResponse", output, null);
    },
    ModifyRules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "ModifyRules", input, null, "tan", "ModifyRulesResponse", output, null);
    },
};
export const AnalyticsEngineBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "GetServiceCapabilities", input, null, "tan", "GetServiceCapabilitiesResponse", output, null);
    },
    GetSupportedAnalyticsModules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "GetSupportedAnalyticsModules", input, null, "tan", "GetSupportedAnalyticsModulesResponse", output, null);
    },
    CreateAnalyticsModules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "CreateAnalyticsModules", input, null, "tan", "CreateAnalyticsModulesResponse", output, null);
    },
    DeleteAnalyticsModules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "DeleteAnalyticsModules", input, null, "tan", "DeleteAnalyticsModulesResponse", output, null);
    },
    GetAnalyticsModules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "GetAnalyticsModules", input, null, "tan", "GetAnalyticsModulesResponse", output, null);
    },
    ModifyAnalyticsModules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tan", "ModifyAnalyticsModules", input, null, "tan", "ModifyAnalyticsModulesResponse", output, null);
    },
};
export const AnalyticsDeviceBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetServiceCapabilities", input, null, "tad", "GetServiceCapabilitiesResponse", output, null);
    },
    DeleteAnalyticsEngineControl( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "DeleteAnalyticsEngineControl", input, null, "tad", "DeleteAnalyticsEngineControlResponse", output, null);
    },
    CreateAnalyticsEngineControl( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "CreateAnalyticsEngineControl", input, null, "tad", "CreateAnalyticsEngineControlResponse", output, null);
    },
    SetAnalyticsEngineControl( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "SetAnalyticsEngineControl", input, null, "tad", "SetAnalyticsEngineControlResponse", output, null);
    },
    GetAnalyticsEngineControl( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsEngineControl", input, null, "tad", "GetAnalyticsEngineControlResponse", output, null);
    },
    GetAnalyticsEngineControls( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsEngineControls", input, null, "tad", "GetAnalyticsEngineControlsResponse", output, null);
    },
    GetAnalyticsEngine( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsEngine", input, null, "tad", "GetAnalyticsEngineResponse", output, null);
    },
    GetAnalyticsEngines( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsEngines", input, null, "tad", "GetAnalyticsEnginesResponse", output, null);
    },
    SetVideoAnalyticsConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "SetVideoAnalyticsConfiguration", input, null, "tad", "SetVideoAnalyticsConfigurationResponse", output, null);
    },
    SetAnalyticsEngineInput( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "SetAnalyticsEngineInput", input, null, "tad", "SetAnalyticsEngineInputResponse", output, null);
    },
    GetAnalyticsEngineInput( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsEngineInput", input, null, "tad", "GetAnalyticsEngineInputResponse", output, null);
    },
    GetAnalyticsEngineInputs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsEngineInputs", input, null, "tad", "GetAnalyticsEngineInputsResponse", output, null);
    },
    GetAnalyticsDeviceStreamUri( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsDeviceStreamUri", input, null, "tad", "GetAnalyticsDeviceStreamUriResponse", output, null);
    },
    GetVideoAnalyticsConfiguration( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetVideoAnalyticsConfiguration", input, null, "tad", "GetVideoAnalyticsConfigurationResponse", output, null);
    },
    CreateAnalyticsEngineInputs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "CreateAnalyticsEngineInputs", input, null, "tad", "CreateAnalyticsEngineInputsResponse", output, null);
    },
    DeleteAnalyticsEngineInputs( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "DeleteAnalyticsEngineInputs", input, null, "tad", "DeleteAnalyticsEngineInputsResponse", output, null);
    },
    GetAnalyticsState( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tad", "GetAnalyticsState", input, null, "tad", "GetAnalyticsStateResponse", output, null);
    },
};
export const ActionEngineBinding =
{
    GetSupportedActions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "GetSupportedActions", input, null, "tae", "GetSupportedActionsResponse", output, null);
    },
    GetActions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "GetActions", input, null, "tae", "GetActionsResponse", output, null);
    },
    CreateActions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "CreateActions", input, null, "tae", "CreateActionsResponse", output, null);
    },
    DeleteActions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "DeleteActions", input, null, "tae", "DeleteActionsResponse", output, null);
    },
    ModifyActions( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "ModifyActions", input, null, "tae", "ModifyActionsResponse", output, null);
    },
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "GetServiceCapabilities", input, null, "tae", "GetServiceCapabilitiesResponse", output, null);
    },
    GetActionTriggers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "GetActionTriggers", input, null, "tae", "GetActionTriggersResponse", output, null);
    },
    CreateActionTriggers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "CreateActionTriggers", input, null, "tae", "CreateActionTriggersResponse", output, null);
    },
    DeleteActionTriggers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "DeleteActionTriggers", input, null, "tae", "DeleteActionTriggersResponse", output, null);
    },
    ModifyActionTriggers( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tae", "ModifyActionTriggers", input, null, "tae", "ModifyActionTriggersResponse", output, null);
    },
};
export const ScheduleBinding =
{
    GetServiceCapabilities( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetServiceCapabilities", input, null, "tsc", "GetServiceCapabilitiesResponse", output, null);
    },
    GetScheduleState( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetScheduleState", input, null, "tsc", "GetScheduleStateResponse", output, null);
    },
    GetScheduleInfo( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetScheduleInfo", input, null, "tsc", "GetScheduleInfoResponse", output, null);
    },
    GetScheduleInfoList( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetScheduleInfoList", input, null, "tsc", "GetScheduleInfoListResponse", output, null);
    },
    GetSchedules( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetSchedules", input, null, "tsc", "GetSchedulesResponse", output, null);
    },
    GetScheduleList( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetScheduleList", input, null, "tsc", "GetScheduleListResponse", output, null);
    },
    CreateSchedule( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "CreateSchedule", input, null, "tsc", "CreateScheduleResponse", output, null);
    },
    ModifySchedule( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "ModifySchedule", input, null, "tsc", "ModifyScheduleResponse", output, null);
    },
    DeleteSchedule( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "DeleteSchedule", input, null, "tsc", "DeleteScheduleResponse", output, null);
    },
    GetSpecialDayGroupInfo( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetSpecialDayGroupInfo", input, null, "tsc", "GetSpecialDayGroupInfoResponse", output, null);
    },
    GetSpecialDayGroupInfoList( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetSpecialDayGroupInfoList", input, null, "tsc", "GetSpecialDayGroupInfoListResponse", output, null);
    },
    GetSpecialDayGroups( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetSpecialDayGroups", input, null, "tsc", "GetSpecialDayGroupsResponse", output, null);
    },
    GetSpecialDayGroupList( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "GetSpecialDayGroupList", input, null, "tsc", "GetSpecialDayGroupListResponse", output, null);
    },
    CreateSpecialDayGroup( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "CreateSpecialDayGroup", input, null, "tsc", "CreateSpecialDayGroupResponse", output, null);
    },
    ModifySpecialDayGroup( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "ModifySpecialDayGroup", input, null, "tsc", "ModifySpecialDayGroupResponse", output, null);
    },
    DeleteSpecialDayGroup( obj, input, output )
    {
        return libonvif.onvif_request_response_operation(obj, "tsc", "DeleteSpecialDayGroup", input, null, "tsc", "DeleteSpecialDayGroupResponse", output, null);
    },
};
