## Designed a format that would make it easy to identify each parameter in the file

> * Each file will start with the word `start`.
> * The next line will be the number machine when a three hash mark separates the values `feeder###101`.
> * The information that collected from the machine:
>   
>   Date###Time###RFID###Should receive an award###How many awards he received####Of how many###Wakefulness###
>   `2021/11/30###10:51:30###8126555###yes###2###3###none`
> * And finally the word "end" `end`.
>
>   Example format:
>   ```
>   start
>   feeder###101
>   2021/11/30###10:51:30###8126555###yes###2###3###none
>   ...
>   ...
>   end
>   ```
>
>Of course there may be changes but this is the basis for starting to write the code.  

