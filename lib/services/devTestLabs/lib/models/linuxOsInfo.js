/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the LinuxOsInfo class.
 * @constructor
 * Information about a Linux OS.
 *
 * @member {string} [linuxOsState] The state of the Linux OS. Possible values
 * include: 'NonDeprovisioned', 'DeprovisionRequested', 'DeprovisionApplied'
 *
 */
class LinuxOsInfo {
  constructor() {
  }

  /**
   * Defines the metadata of LinuxOsInfo
   *
   * @returns {object} metadata of LinuxOsInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LinuxOsInfo',
      type: {
        name: 'Composite',
        className: 'LinuxOsInfo',
        modelProperties: {
          linuxOsState: {
            required: false,
            serializedName: 'linuxOsState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = LinuxOsInfo;
