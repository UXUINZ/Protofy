import { onEvent, emitEvent } from 'protolib/bundles/events/api'
import { automation, fetch, deviceAction, deviceMonitor } from 'protolib/bundles/apis/context/'
import {createSchedule} from 'protolib/bundles/automations/schedule'
import {createPeriodicSchedule} from 'protolib/bundles/automations/periodicSchedule'
import { sendMailWithResend } from 'protolib/bundles/resend/context'
import object from 'protolib/bundles/objects/context'
import flow from 'protolib/bundles/flow/context'
export default {
    onEvent,
    emitEvent,
    automation,
    fetch,
    deviceAction,
    deviceMonitor,
    createSchedule,
    createPeriodicSchedule,
    sendMailWithResend,
    flow,
    object
}