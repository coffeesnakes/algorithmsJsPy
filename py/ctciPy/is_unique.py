def is_unique_chars_using_dictionary(string: str) -> bool:
    character_counts = {}
    for char in string:
        if char in character_counts:
            return False
        character_counts[char] = 1
    return True
