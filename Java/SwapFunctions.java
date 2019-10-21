package Java;

import Java.SwapVars;
import Java.SwapPrinting;

public class SwapFunctions {
    public static void SwapVars(SwapVars sV) {
        sV = SwapPrinting.Printing("Original", sV);

        int Temp = sV.getA();
        sV.setA(sV.getB());
        sV.setB(Temp);

        sV = SwapPrinting.Printing("Temp", sV);

        sV.setA(sV.getA() + sV.getB());
        sV.setB(sV.getA() - sV.getB());
        sV.setA(sV.getA() - sV.getB());

        sV = SwapPrinting.Printing("Math", sV);

        sV.setA(sV.getA() ^ sV.getB());
        sV.setB(sV.getA() ^ sV.getB());
        sV.setA(sV.getA() ^ sV.getB());

        sV = SwapPrinting.Printing("XOR", sV);


        // Testing Something Out
        // sV.setA(ReturnFirst(sV.getB(), sV.setB(sV.getA())));

        // No pass by ref, so no need for end value pass
    }

    // private int ReturnFirst(int a, int b) {
    //     return a;
    // }
}