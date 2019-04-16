/*
*  File:            plugin/types.ts
*  Description:     Holds types and constants for managing Chris API plugin calls
*  Author:          ChRIS UI
*  Notes:           .
*/
import keyMirror from "keymirror";
import { IPluginItem } from "../../api/models/pluginInstance.model";
import { IFeedFile } from "../../api/models/feed-file.model";
import { IUITreeNode } from "../../api/models/file-explorer";

// Description state for main user items[] and item
export interface IPluginState {
    selected?: IPluginItem;
    descendants?: IPluginItem[];
    files?: IFeedFile[];
    parameters?: any[];
}

export const PluginActionTypes = keyMirror({
    GET_PLUGIN_DESCENDANTS: null,
    GET_PLUGIN_DESCENDANTS_SUCCESS: null,
    GET_PLUGIN_FILES: null,
    GET_PLUGIN_FILES_SUCCESS: null,
    GET_PLUGIN_PARAMETERS: null,
    GET_PLUGIN_PARAMETERS_SUCCESS: null,
    GET_PLUGIN_DETAILS: null,
    GET_PLUGIN_DETAILS_SUCCESS: null,
    FETCH_COMPLETE: null, // after request completes
    FETCH_ERROR: null, // request failed
    RESET_PLUGIN_STATE: null,
});
