class Rover {
   // Write code here!
   constructor(position) {
        this.position = position;
        this.mode = 'NORMAL';
        this.generatorWatts = 110;
    }
    receiveMessage(message)
    {
      let results=[];
      for(const command of message.commands)
      {
        if(command.commandType === 'STATUS_CHECK')
        {
        results.push({
          completed: true,
          roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}
        });
        }
      }
      
      return {message: message.name,
              results
              };
    }
}

module.exports = Rover;