package Java;

import Java.SwapVars;


/**
 * SwapPrinting
 */
public class SwapPrinting {
    public static SwapVars Printing(String msg, SwapVars sVars) {
        System.out.println(msg + ": a = " + sVars.getA() + ", b = " + sVars.getB());
        System.out.println();

        sVars.setA(sVars.getInitA());
        sVars.setB(sVars.getInitB());

        return sVars;
    }
}