import { useCallback, useState } from 'react';
import { Workflow } from '@/types/workflow.d';
import {
  deleteWorkflow,
  createWorkflow,
  updateWorkflow,
} from '@/services/workflow';

export interface WorkflowModel {
  remove: (workflowId: string) => void;
  update: (workflow: Workflow) => void;
  create: (workflow: Workflow) => void;
  clearResult: () => void;
  result: { success?: boolean };
}

export default (): WorkflowModel => {
  const [result, setResult] = useState<{ success?: boolean }>({
    success: false,
  });

  const remove = useCallback(async (workflowId?: string) => {
    setResult(await deleteWorkflow(workflowId));
  }, []);

  const update = useCallback(async (workflow: Workflow) => {
    setResult(await updateWorkflow(workflow));
  }, []);

  const create = useCallback(async (workflow: Workflow) => {
    setResult(await createWorkflow(workflow));
  }, []);

  const clearResult = useCallback(() => setResult({ success: false }), []);

  return { remove, update, create, clearResult, result };
};
