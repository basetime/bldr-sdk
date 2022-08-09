import { SFMCContextMapping } from '../types/sfmc_context_mapping';

const sfmc_context_mapping: SFMCContextMapping[] = [
    {
        name: 'Data Extensions',
        rootName: 'Data Extensions',
        context: 'dataExtension',
        contentType: 'dataextension',
    },
    {
        name: 'Content Builder',
        rootName: 'Content Builder',
        context: 'contentBuilder',
        contentType: 'asset',
    },
    {
        name: 'Automation Studio',
        rootName: 'my automations',
        context: 'automationStudio',
        contentType: 'automations',
    },
];

export { sfmc_context_mapping };
