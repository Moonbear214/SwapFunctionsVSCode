// This is to test multiple diff suplutions for the Swap function in c++

#include <iostream>
using namespace std;

// Variables
int inita = 5;
int initb = 7;

// Functions
void Printing(string heading, int& a, int& b, int c = 0) {
    cout << heading << endl;
    cout << "a = " << a << " | b = " << b;

    if (c != 0) {
        cout << " | c = " << c;
    }

    a = inita;
    b = initb;

    cout << endl;
    cout << endl;
}

void SwapRef(int &a, int &b) {
    int temp = b;
    b = a;
    a = temp;

    Printing("Ref in func", a, b);
};

void SwapVar(int a, int b) {
    int temp = b;
    b = a;
    a = temp;

    Printing("Temp", a, b);

    a ^= b;
    b ^= a;
    a ^= b;

    int c = a ^ b;

    Printing("XOR", a, b, c);

    a = a + b;
    b = a - b;
    a = a - b;

    Printing("Math", a, b);

    swap(a, b);
    Printing("Native Swap:", a, b);
}

// Main
int main() {
    Printing("Before Values", inita, initb);

    SwapVar(inita, initb);

    SwapRef(inita, initb);

    Printing("After Values", inita, initb);
}
