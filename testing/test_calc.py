from unittest import TestCase, main
from main import Calc


class TestCalc(TestCase):
    
    @classmethod
    def setUpClass(cls):
        a = 4
        b = 2
        cls.c = Calc(a, b)

    def test_sumx(self):
        expected_result = 6
        actual_result = self.c.sumx()
        self.assertEqual(expected_result, actual_result)

    def test_divide(self):
        expected_result = 2
        actual_result = self.c.divide()
        self.assertEqual(expected_result, actual_result)

    def test_divide_with_zero_args(self):
        a = 4
        b = 0
        c = Calc(a, b)
        self.assertRaises(ZeroDivisionError, c.divide)
        
    @classmethod
    def tearDownClass(cls):
        del cls.c


if __name__ == "__main__":
    main()
