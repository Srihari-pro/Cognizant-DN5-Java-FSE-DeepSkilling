public class Main {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Travel")
        };

        Product linearResult = LinearSearch.search(products, 103);

        if (linearResult != null) {
            System.out.println("Linear Search Found: " + linearResult.productName);
        }

        Product binaryResult = BinarySearch.search(products, 103);

        if (binaryResult != null) {
            System.out.println("Binary Search Found: " + binaryResult.productName);
        }
    }

}