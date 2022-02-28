import { Opportunity } from '@/types/opportunity';
import { useCallback, useState } from 'react';
import {
  createOpportunity,
  disableOpportunity,
  updateOpportunity,
} from '@/services/opportunity';

export interface OpportunityModel {
  disable: (opportunityId: string) => void;
  update: (opportunity: Opportunity) => void;
  create: (opportunity: Opportunity) => void;
  clearResult: () => void;
  result: { success?: boolean };
}

export default (): OpportunityModel => {
  const [result, setResult] = useState<{ success?: boolean }>({
    success: false,
  });

  const disable = useCallback(async (opportunityId?: string) => {
    setResult(await disableOpportunity(opportunityId));
  }, []);

  const update = useCallback(async (opportunity: Opportunity) => {
    setResult(await updateOpportunity(opportunity));
  }, []);

  const create = useCallback(async (opportunity: Opportunity) => {
    setResult(await createOpportunity(opportunity));
  }, []);

  const clearResult = useCallback(() => setResult({ success: false }), []);

  return { disable, update, create, clearResult, result };
};
