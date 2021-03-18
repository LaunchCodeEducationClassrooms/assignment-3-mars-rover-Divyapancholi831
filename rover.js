class Rover {
   // Write code here!
   Constructor(position)
   {
     this.position=position;
     this.mode='NORMAL';
     this.generatorWatts=110;
   }
   /*receiveMessage(message)
   {
     return {};
   }*/
}

module.exports = Rover;