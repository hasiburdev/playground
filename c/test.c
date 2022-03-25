#include<stdio.h>

int square(int x) {
    int result = x * x;
    return result;
}

int cube(int x) {
    int result = x * x * x;
    return 'a';
}

int main() {

    int r = square(5);
    int s = cube(5);
    printf("%d\n", r);
    printf("%d\n", s);

    return 0;
}