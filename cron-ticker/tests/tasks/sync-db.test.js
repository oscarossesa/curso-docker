const { syncDB } = require('../../tasks/sync-db')

describe('Prueba en Sync-DB', () => {
  test('debe de ejecutar el proceso de sincronización 2 veces', () => {
    syncDB();
    const times = syncDB();

    expect(times).toBe(2);
  })
})