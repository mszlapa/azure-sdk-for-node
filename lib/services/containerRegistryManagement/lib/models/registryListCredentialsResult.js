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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the RegistryListCredentialsResult class.
 * @constructor
 * The response from the ListCredentials operation.
 *
 * @member {string} [username] The username for a container registry.
 *
 * @member {array} [passwords] The list of passwords for a container registry.
 *
 */
class RegistryListCredentialsResult {
  constructor() {
  }

  /**
   * Defines the metadata of RegistryListCredentialsResult
   *
   * @returns {object} metadata of RegistryListCredentialsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegistryListCredentialsResult',
      type: {
        name: 'Composite',
        className: 'RegistryListCredentialsResult',
        modelProperties: {
          username: {
            required: false,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          passwords: {
            required: false,
            serializedName: 'passwords',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RegistryPasswordElementType',
                  type: {
                    name: 'Composite',
                    className: 'RegistryPassword'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = RegistryListCredentialsResult;
