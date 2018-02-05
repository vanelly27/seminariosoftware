var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/avion', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/formularioAvion', function(req, res, next){
  //este codigo manejara el metodo GET
  var datos = {
    "Nombre":"",
    "Identidad":"",
    "Edad":"",
    "cbTeguSPS":"checked=checked",
    "cbTeguCeiba":"",
    "cbSPSTegu":"",
    "cbCeibaTegu":"",
    "Dias":"",
    "Resultado":""


  };
  //res.render es la funcion que devuelve la plantilla de la carpeta view y datos son los valores
  //que seran incorporados en los {{}} en la plantilla
  res.render('formularioAvion', datos);
});


router.post('/formularioAvion', function(req,res,next){
  //este codigo manejara el metodo post de la misma ruta que la anterior
  console.log(req.body);//esto lo observaremos en la terminal donde se corrio nodemono npm start

  var datos = {
    "Nombre":req.body.txtName,
    "Identidad":req.body.txtIdentidad,
    "Edad":req.body.txtEdad,
    "cbTeguSPS":(req.body.vuelo && true)?"checked=checked":"",
    "cbTeguCeiba":(req.body.vuelo && true)?"checked=checked":"",
    "cbSPSTegu":(req.body.vuelo && true)?"checked=checked":"",
    "cbCeibaTegu":(req.body.vuelos && true)?"checked=checked":"",
    "Dias":req.body.txtDias,
    "Resultado":"Cliente"+ req.body.txtNombre + "El gasto total sera de: " + (req.body.txtDias*req.body.vuelo)
  };
  //res.render es la funcion que devuelve la plantilla de la carpeta view y datos son los valores
  //que seran incorporados en los {{}} en la plantilla
  res.render('formularioAvion', datos);
});
module.exports = router;
