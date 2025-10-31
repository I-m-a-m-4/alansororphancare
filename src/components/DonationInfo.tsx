import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Landmark, Gift } from "lucide-react";

export function DonationInfo() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Landmark className="h-6 w-6 text-primary" />
            Bank Transfer
          </CardTitle>
          <CardDescription>
            You can make a direct deposit or transfer to our foundation's bank account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold text-primary">Bank Name:</p>
            <p className="text-muted-foreground">Jaiz Bank Plc</p>
          </div>
          <div>
            <p className="font-semibold text-primary">Account Name:</p>
            <p className="text-muted-foreground">Al-Ansor Orphan Care Foundation</p>
          </div>
          <div>
            <p className="font-semibold text-primary">Account Number:</p>
            <p className="text-muted-foreground">0001234567 (Example)</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Gift className="h-6 w-6 text-primary" />
            In-Kind Donations
          </CardTitle>
          <CardDescription>
            We also accept donations of food, clothing, educational materials, and other essential items.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Please contact us directly to arrange for in-kind donations to ensure they meet the current needs of our children. You can reach us via our <a href="/contact" className="text-primary underline hover:no-underline">contact page</a>.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Banknote className="h-6 w-6 text-primary-foreground" />
             A Powerful Reward
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="italic">
            “The charity of those who expend their wealth in the Way of Allah may be likened to a grain of corn, which produces seven ears, and each ear yields a hundred grains. Likewise, Allah gives manifold increase to whomever He wishes, for Allah is All-Embracing, All-Knowing.”
          </p>
           <p className="text-right mt-2 font-medium">- Quran 2:261</p>
        </CardContent>
      </Card>
    </div>
  );
}
