import java.util.Arrays;


public class Main {
    public static void main(String[] args) {
        // int[] numbers = new int[3];
        // shorthand initialization
        int[] numbers = {2,5,6,6,7,45,45,3};
        Array arr = new Array(10);
        arr.insert(5);
        arr.insert(34);
        arr.insert(56);
        arr.insert(1);
        arr.insert(4);
        System.out.println(arr.indexOf(34));
        System.out.println(arr.indexOf(3));
        arr.print();
        // System.out.println(numbers);
        // System.out.println(Arrays.toString(numbers));
        arr.removeAt(1);
        arr.print();
        
    }
}