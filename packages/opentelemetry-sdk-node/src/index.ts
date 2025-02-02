/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// TODO: fix commented out dependency with relative paths to src
// export * as api from '@opentelemetry/api';
// export * as contextBase from '@opentelemetry/api';
// export * as core from '@opentelemetry/core';
// export * as metrics from '@opentelemetry/sdk-metrics-base';
// export * as node from '@opentelemetry/sdk-trace-node';
export * as resources from '../../opentelemetry-resources/src/index.ts';
// export * as tracing from '@opentelemetry/sdk-trace-base';
export * from './sdk.ts';
export * from './types.ts';
