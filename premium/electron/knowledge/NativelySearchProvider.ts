// LOCAL EVALUATION STUB (created 2026-10-24).
// The premium/ directory is a private git submodule (natively-premium) that is NOT
// included in the public GitHub zip, so these files were missing and broke the build.
// This stub only unblocks the build; the feature behind it (company research via
// Tavily / Natively API keys) is not functional without the real premium module.

import type { SearchProvider } from '../../../electron/premium/contracts';

export class NativelySearchProvider implements SearchProvider {
  constructor(private apiKey: string, private trialToken?: string) {}
  async search(_query: string): Promise<unknown> {
    throw new Error('NativelySearchProvider stub: premium module not included in public source.');
  }
}

