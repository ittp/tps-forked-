InterfaceType:=LTE
IMSI:=250110105194510
UICC-ID:=8971100001051945104f
IMEI:=355386102491531
IMEISV:=35538610249153100
MSISDN:=Unknown
Название устройства:=Yota Modem
RfVersion:=Skylark_D07C_1_10_20170221
AsicVersion:=D07C
FirmwareVersion:=D07C_Yota_V048
State:=Connected
WebGuiUrl:=http://status.yota.ru
UpdateState:=NotStarted
UpdateProgress:=0
let dataDemo = `SupportsConnectDisabling:=0
ConnectingPhase:=--
SINR:=14dB
RSSI:=-40dBm
RSRP:=-68dBm
RSRQ:=-11
eNBID:=be7b5
MCC:=250
MNC:=11
PLMN:=25011
RoamingStatus:=0
CGI:=25011BE7B5C8
CI:=be7b5c8
HNBN:=
CSGT:=
CenterFreq:=1844600
TxPWR:=-11
SPN:=YOTA
IsIdle:=0
Connected Time:=00:01:18
SessionId:=
SentBytes:=1.02 MB
ReceivedBytes:=4.03 MB
MaxDownlinkThroughput:=98 KB
MaxUplinkThroughput:=57 KB
CurDownlinkThroughput:=13 KB
CurUplinkThroughput:=5 KB
TotalHandoversCount:=0
SucceededHandoversCount:=0
IsReadyForUpdate:=0
IP:=109.188.130.40
SubnetMask:=255.0.0.0
DefaultGateway:=109.188.130.215
DHCP:=10.0.0.1
DNS:=10.153.3.252,10.153.3.228`


let data = dataDemo.split(":=")

export default function() {
    
    return data
}