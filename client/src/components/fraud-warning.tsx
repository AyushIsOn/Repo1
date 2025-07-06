import { AlertTriangle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function FraudWarning() {
  return (
    <section className="py-12 bg-red-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Card className="border-2 border-red-300 bg-white shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="flex justify-center items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-xl font-bold text-red-700">
                  ⚠️ BEWARE OF CYBER FRAUDSTERS
                </h2>
              </div>
              
              <p className="text-red-700 mb-6 leading-relaxed">
                Some cyber fraudsters have put their numbers on Google Maps and ask users to pay token money online to book rooms. 
                We <strong>DO NOT</strong> charge anything until admission is confirmed. Please do not fall for this fraud.
              </p>
              
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <h3 className="text-green-800 font-bold mb-3">
                  ONLY CALL ON THESE VERIFIED NUMBERS:
                </h3>
                <div className="flex justify-center items-center">
                  <Phone className="w-5 h-5 text-green-600 mr-2" />
                  <a 
                    href="tel:+919795204621" 
                    className="text-lg font-bold text-green-700 hover:text-green-800"
                  >
                    +91 97952 04621
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
