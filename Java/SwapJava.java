package Java;

import Java.SwapVars;
import Java.SwapFunctions;

/**
 * Swap
 */
public class SwapJava {
    static SwapFunctions sFunctions;
    SwapVars sV;

    // Variables Decleration
    static int initA = 5;
    static int initB = 7;

    public static void main(String[] args) {
        SwapVars sV = new SwapVars();

        sV.setInitA(initA);
        sV.setInitB(initB);

        SwapFunctions.SwapVars(sV);
    }    
}
