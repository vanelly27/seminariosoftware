package com.example.vanelly.miaplicacioncalculadora;

        import android.support.v7.app.AppCompatActivity;
        import android.os.Bundle;
        import android.view.View;
        import android.widget.Button;
        import android.widget.EditText;
        import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    EditText num1, num2;
    Button suma,resta,mult, divi;
    TextView resultado;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        num1 =  findViewById(R.id.num1);
        num2 =  findViewById(R.id.num2);

        suma=  findViewById(R.id.sumar);
        resta=  findViewById(R.id.restar);
        mult =  findViewById(R.id.mul);
        divi =  findViewById(R.id.div);

        resultado = findViewById(R.id.resultado);

        suma.setOnClickListener(this);
        resta.setOnClickListener(this);
        mult.setOnClickListener(this);
        divi.setOnClickListener(this);

    }

    @Override
    public void onClick(View view) {

        String n1 = num1.getText().toString();
        String n2 = num2.getText().toString();

        int numero1 = Integer.parseInt(n1);
        int numero2 = Integer.parseInt(n2);

        int respuesta =0;

        switch (view.getId()){
            case R.id.sumar:
                respuesta = numero1+numero2;
                break;

            case R.id.restar:
                respuesta = numero1-numero2;
                break;

            case R.id.mul:
                respuesta = numero1*numero2;
                break;

            case R.id.div:
                respuesta = numero1/numero2;
                break;
        }
        resultado.setText(""+respuesta);
    }
}

