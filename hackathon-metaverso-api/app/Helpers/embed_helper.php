<?php

use Smalot\PdfParser\Parser;
use PhpOffice\PhpWord\IOFactory;

if (!function_exists('extract_text_from_pdf')) {
    function extract_text_from_pdf(string $path): string
    {
        $parser = new Parser();
        $pdf = $parser->parseFile($path);
        return mb_convert_encoding($pdf->getText(), 'UTF-8', 'UTF-8');
    }
}


if (!function_exists('split_text_by_max_chars')) {
    function split_text_by_max_chars(string $text, int $maxChars = 30000): array
    {
        $paragraphs = preg_split('/(\r?\n){2,}/u', $text);
        $chunks = [];
        $splitParagraphs = [];
        $current = '';

        foreach ($paragraphs as $p) {
            $p = trim($p);
            if ($p === '') {
                continue;
            }

            if (mb_strlen($current) + mb_strlen($p) + 2 <= $maxChars) {
                $current .= ($current === '' ? '' : "\n\n") . $p;
                continue;
            }

            if (mb_strlen($p) > $maxChars) {
                $splitParagraphs[] = split_long_paragraph($p, $maxChars);
                continue;
            }

            if ($current !== '') {
                $chunks[] = $current;
            }
            $current = $p;
        }

        if ($current !== '') {
            $chunks[] = $current;
        }

        return array_merge($chunks, ...$splitParagraphs);

    }
}

if (!function_exists('split_long_paragraph')) {
    function split_long_paragraph(string $paragraph, int $maxChars): array
    {

        $sentences = preg_split('/(?<=[.?!])\s+/u', $paragraph);
        $chunks = [];
        $current = '';

        foreach ($sentences as $s) {
            $s = trim($s);
            if ($s === '') {
                continue;
            }

            if (mb_strlen($current) + mb_strlen($s) + 1 <= $maxChars) {
                $current .= ($current === '' ? '' : ' ') . $s;
                continue;
            }

            if ($current !== '') {
                $chunks[] = $current;
            }

            if (mb_strlen($s) > $maxChars) {
                $words = preg_split('/\s+/u', $s);
                $parts = array_chunk($words, (int)max(1, floor(count($words) * $maxChars / mb_strlen($s))));
                foreach ($parts as $part) {
                    $chunks[] = implode(' ', $part);
                }
                $current = '';
            } else {
                $current = $s;
            }
        }

        if ($current !== '') {
            $chunks[] = $current;
        }

        return $chunks;
    }
}
