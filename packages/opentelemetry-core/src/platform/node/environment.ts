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

// import * as os from 'os';
import {
  DEFAULT_ENVIRONMENT,
  ENVIRONMENT,
  RAW_ENVIRONMENT,
  parseEnvironment,
} from '../../utils/environment.ts';
import {
  hostname
} from 'https://deno.land/std/node/os.ts';

/**
 * Gets the environment variables
 */
export function getEnv(): Required<ENVIRONMENT> {
  const rawEnv: RAW_ENVIRONMENT = Deno.env.toObject();
  const processEnv = parseEnvironment( rawEnv );
  return Object.assign(
    {
      HOSTNAME: hostname(),
    },
    DEFAULT_ENVIRONMENT,
    processEnv
  );
}
Deno.metrics()