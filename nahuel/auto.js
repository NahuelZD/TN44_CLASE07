let auto = {
    marca: 'Ford',
    encendido: false,
    onOff: function(){
        if(this.encendido){
            console.log(`El ${this.marca} está encendido. Apagando vehículo.`);
            this.encendido = false;
        }else{
            console.log(`El ${this.marca} está apagado. Encendiendo vehículo.`);
            this.encendido = true;
        }
    }
}

auto.onOff();
auto.onOff();