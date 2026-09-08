import java.util.Scanner;

public class KecepatanKendaraan {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // Input jarak
        System.out.print("Masukkan jarak kendaraan (km): ");
        double jarak = input.nextDouble();

        // Input waktu
        System.out.print("Masukkan waktu tempuh (jam): ");
        double waktu = input.nextDouble();

        // Menghitung kecepatan
        double kecepatan = jarak / waktu;

        // Menampilkan hasil
        System.out.println("================================");
        System.out.println("Jarak      : " + jarak + " km");
        System.out.println("Waktu      : " + waktu + " jam");
        System.out.println("Kecepatan  : " + kecepatan + " km/jam");
        System.out.println("================================");

        input.close();
    }
}

