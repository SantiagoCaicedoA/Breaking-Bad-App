//
//  CalculatorBrain.swift
//  BMI Calculator
//
//  Created by Santiago Caicedo on 2021-11-09.
//  Copyright © 2021 Angela Yu. All rights reserved.
//

import UIKit

struct CalculatorBrain{
    var bmi: BMI?
    
    func getBMIValue() -> String{
        let temp = String(format: "%.1f", bmi?.value ?? 0.0)
        return temp
    }
    
    func getColor() -> UIColor{
        return bmi?.color ?? UIColor.white
    }
    
    func getAdvice() -> String{
        return bmi?.advice ?? "No advice"
    }
    
    mutating func calculateBMI(height: Float, weight: Float ){
        let bmiValue = weight / (height * height)
        let advice : String
        var color = UIColor.gray
        
        if (bmiValue < 18.5){
            advice = "Eat more rice!"
            color = UIColor.red
        }
        else if (bmiValue < 24.9){
            advice = "Fit as a fiddle"
            color = UIColor.green
        }
        else{
            advice = "Eat less rice!"
            color = UIColor.red
        }
        bmi = BMI(value: bmiValue, advice: advice, color: color)
        
    }
    
}
