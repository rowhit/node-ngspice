module.exports = {
  socket_router: (socket) => {
    // loading page signal
    socket.emit('loading-page', { load: 'loading-page' });

    // socket router
    socket.on('socket-id', async (data) => {
      // connection success
      const socket_id_process = require('./socket_id').socket_id_process;
      let res = await socket_id_process(data);
      socket.emit('socket_id', res);
    });

    socket.on('netlist-data', async (data) => {
      const netlist_data_process = require('./netlist_data').netlist_data_process;
      let res = await netlist_data_process(data);
      socket.emit('netlist-data', res);
    });
  },
}
