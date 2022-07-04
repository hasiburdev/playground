public class Array {
    private int[] items;
    private int count;

    public Array(int length) {
        this.items = new int[length];
        this.count = 0;
        System.out.println("Array Created!");
    }

    public void insert(int value) {
        this.items[count++] = value;
    }
    
    public int indexOf(int item) {
        for(int i=0; i<count; i++) {
            if(this.items[i] == item) return i;
        }
        return -1;
    }

    public void removeAt(int index) {
        if(index < 0 || index >= count) {
            System.out.println("Index is out of boundary!");
            return;
        }
        for(int i = index; i < count-1; i++) {
            this.items[i] = this.items[i+1];
        }
        count--;
    }

    public void print() {

        if(this.count == 0) {
            System.out.println("Empty Array!");
            return;
        } 

        for(int i=0; i < this.count; i++) {
            System.out.println(this.items[i]);
        }
    }
}