import { AlertTriangle, Shield, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CyberFraudWarning() {
  return (
    <section className="py-16 bg-red-50 border-t-2 border-red-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Card className="border-2 border-red-300 bg-white shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                ⚠️ BEWARE OF CYBER FRAUDSTERS ⚠️
              </h2>
              <p className="text-lg text-red-600 font-semibold">
                Important Security Notice for All Residents & Visitors
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    How to Stay Safe
                  </h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Never share OTP</strong> or personal details over phone/SMS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Don't click suspicious links</strong> claiming urgent action needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Verify caller identity</strong> before sharing any information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>No legitimate organization</strong> asks for passwords via call/SMS</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    Common Fraud Tactics
                  </h3>
                  <ul className="space-y-3 text-orange-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Fake bank/UPI transaction alerts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Impersonating PG staff or management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Emergency calls asking for money transfer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Fake KYC update or account verification</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-300">
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    Official Contact Only
                  </h3>
                  <div className="space-y-3 text-green-700">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-semibold">+91 XXXX-XXXX-XX</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-green-600" />
                      <span className="font-semibold">info@avnipg.com</span>
                    </div>
                    <p className="text-sm text-green-600 mt-2">
                      ✅ Always verify through these official channels only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Remember:</strong> Avni PG Management will never ask for OTP, passwords, or immediate money transfers via phone calls or messages. 
                  When in doubt, visit our office in person or call our verified number.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
