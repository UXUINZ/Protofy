import ApiResponse from './ApiResponse';
import ApiMask from './ApiMask';
import Fetch from './Fetch'
import Logger from './Logger';
import Automation from './Automation';
import DeviceAction from './DeviceAction';
import DeviceMonitor from './DeviceMonitor';

const apiMasks = [
    Automation,
    ApiMask,
    Fetch,
    Logger,
    ApiResponse,
    DeviceAction,
    DeviceMonitor
]

export default apiMasks;