package Java;

/**
 * SwapVars
 */
public class SwapVars {
    
    private Integer a, b, initA = null, initB = null;

    public void setA(Integer a) { this.a = a; }
    public void setB(Integer b) { this.b = b; }
    public void setInitA(Integer initA) { this.initA = initA; this.a = initA; }
    public void setInitB(Integer initB) { this.initB = initB; this.b = initB; }

    public Integer getA() { return this.a; }
    public Integer getB() { return this.b; }
    public Integer getInitA() { return this.initA; }
    public Integer getInitB() { return this.initB; }

}