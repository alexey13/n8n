import 'reflect-metadata';

// Disable task runners until we have fixed the "run test workflows" test
// to mock the Code Node execution
process.env.N8N_RUNNERS_ENABLED = 'false';
