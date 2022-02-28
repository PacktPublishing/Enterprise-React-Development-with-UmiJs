import { useCallback, useState } from 'react';
import { Customer } from '@/types/customer';
import {
  disableCustomer,
  updateCustomer,
  createCustomer,
} from '@/services/customer';

export interface CustomerModel {
  disable: (customerId: string) => void;
  update: (customer: Customer) => void;
  create: (customer: Customer) => void;
  clearResult: () => void;
  result: { success?: boolean };
}

export default (): CustomerModel => {
  const [result, setResult] = useState<{ success?: boolean }>({
    success: false,
  });

  const disable = useCallback(async (customerId?: string) => {
    setResult(await disableCustomer(customerId));
  }, []);

  const update = useCallback(async (customer: Customer) => {
    setResult(await updateCustomer(customer));
  }, []);

  const create = useCallback(async (customer: Customer) => {
    setResult(await createCustomer(customer));
  }, []);

  const clearResult = useCallback(() => setResult({ success: false }), []);

  return { disable, update, create, clearResult, result };
};
